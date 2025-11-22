import React, { useEffect, useState } from "react";
import {
  addDefaultChallenges,
  fetchAllChallenges,
  fetchUserChallenges,
  joinChallenge,
} from "../services/challengesService";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Challenges = () => {
  const [challenges, setChallenges] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = useSelector((state) => state.auth.user);
  const [userChallenges, setUserChallenges] = useState({});
  const [filter, setFilter] = useState("all");

  const handleJoin = async (challengeId) => {
    if (!user?.uid) {
      alert("Please login to join a challenge.");
      return;
    }
    try {
      await joinChallenge(user.uid, challengeId);
      toast.success("Challenge joined successfully!");
      // Refresh user challenges after joining
      const joined = await fetchUserChallenges(user.uid);
      setUserChallenges(joined || {});
    } catch (error) {
      toast.error("Failed to join challenge");
      console.error("Join challenge error:", error);
    }
  };

  useEffect(() => {
    const loadChallenges = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // First, try to fetch existing challenges
        let data = await fetchAllChallenges();
        
        // If no challenges exist, add default ones
        if (!data || Object.keys(data).length === 0) {
          console.log("No challenges found, adding default challenges...");
          await addDefaultChallenges();
          data = await fetchAllChallenges();
        }
        
        setChallenges(data || {});

        // Load user challenges if logged in
        if (user?.uid) {
          const joined = await fetchUserChallenges(user.uid);
          setUserChallenges(joined || {});
        }
      } catch (error) {
        console.error("Error loading challenges:", error);
        setError("Failed to load challenges");
        toast.error("Failed to load challenges");
      } finally {
        setLoading(false);
      }
    };

    loadChallenges();
  }, [user]);

  // Get unique exercise types for filter
  const uniqueTypes = [
    ...new Set(Object.values(challenges).map((c) => c.exerciseType)),
  ];

  // Filter challenges based on selected filter
  const filteredChallenges = 
    filter === "all" 
      ? challenges 
      : Object.fromEntries(
          Object.entries(challenges).filter(
            ([_, c]) => c.exerciseType === filter
          )
        );

  if (loading) {
    return (
      <div className="p-4 text-center dark:text-white">
        Loading challenges...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-center dark:text-white">
        <p className="text-red-500">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">🏆 Challenges</h2>

      {user?.uid && (
        <div className="mb-4 flex justify-between items-center">
          <div></div>
          <Link
            to="/my-challenges"
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
          >
            My Challenges
          </Link>
        </div>
      )}

      {/* Filter Dropdown */}
      <div className="mb-6 flex justify-center">
        <select
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600"
        >
          <option value="all">All Types</option>
          {uniqueTypes.map((type) => (
            <option key={type} value={type}>
              {type.split('_').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')}
            </option>
          ))}
        </select>
      </div>

      {/* Challenges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.keys(filteredChallenges).length === 0 ? (
          <div className="col-span-full text-center py-8">
            <p className="text-lg">No challenges found.</p>
            <button 
              onClick={async () => {
                try {
                  setLoading(true);
                  await addDefaultChallenges();
                  const data = await fetchAllChallenges();
                  setChallenges(data || {});
                } catch (error) {
                  toast.error("Failed to load challenges");
                } finally {
                  setLoading(false);
                }
              }}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Load Default Challenges
            </button>
          </div>
        ) : (
          Object.entries(filteredChallenges).map(([id, challenge]) => {
            const isJoined = userChallenges[id];
            const isExpired =
              isJoined &&
              new Date().getTime() >
                new Date(isJoined.joinedAt).getTime() +
                  challenge.durationDays * 24 * 60 * 60 * 1000;

            const isCompleted =
              isJoined && userChallenges[id].progress >= challenge.goalValue;

            const canJoin = !isJoined || isExpired || isCompleted;

            return (
              <div
                key={id}
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-xl transition border border-gray-200 dark:border-gray-700"
              >
                <img
                  src={challenge.imageUrl}
                  alt={challenge.title}
                  className="w-full h-48 object-cover rounded-md mb-3"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/300x200?text=Challenge+Image";
                  }}
                />
                <h3 className="text-xl font-bold mb-2">{challenge.title}</h3>
                <p className="text-sm mb-2 text-gray-600 dark:text-gray-300">
                  {challenge.description}
                </p>
                <p className="text-sm">
                  🎯 Goal: {challenge.goalValue} {challenge.goalType}
                </p>
                <p className="text-sm">
                  📅 Duration: {challenge.durationDays} days
                </p>
                <p className="text-sm">
                  🏃 Type: {challenge.exerciseType.split('_').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ')}
                </p>
                <p className="text-sm mt-2">🎁 Reward: {challenge.reward}</p>
                
                <button
                  onClick={() => canJoin && handleJoin(id)}
                  className={`mt-4 w-full py-2 rounded transition ${
                    canJoin
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-400 text-white cursor-not-allowed"
                  }`}
                  disabled={!canJoin}
                >
                  {!canJoin 
                    ? isCompleted ? "Completed" : "Already Joined" 
                    : "Join Now"
                  }
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Challenges;