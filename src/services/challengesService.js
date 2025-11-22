import { get, ref, set, update } from "firebase/database";
import { db } from "./firebase";

const defaultChallenges = {
  run_50_miles: {
    title: "Run 50 Miles in a Month",
    description: "Complete 50 miles of running within 30 days",
    goalType: "distance",
    goalValue: 50,
    durationDays: 30,
    reward: "🏅 50-Mile Finisher Badge",
    exerciseType: "running",
    imageUrl: "https://leave-the-road-and.run/content/images/2024/10/54046369607_0fe345ecae_k-1-1.jpg",
  },
  pushup_30_day: {
    title: "30-Day Push-Up Challenge",
    description: "Do push-ups daily for 30 days",
    goalType: "consistency",
    goalValue: 30,
    durationDays: 30,
    reward: "💪 Push-Up Pro Badge",
    exerciseType: "bodyweight",
    imageUrl: "https://phantom-marca.unidadeditorial.es/1b6dcb5cc4da136c098ae39545711815/crop/0x50/1199x723/f/jpg/assets/multimedia/imagenes/2022/02/22/16455364150761.jpg",
  },
  morning_yoga: {
    title: "Morning Yoga Routine",
    description: "Do a 15-min morning yoga routine for 15 days",
    goalType: "consistency",
    goalValue: 15,
    durationDays: 20,
    reward: "🧘 Yoga Starter Badge",
    exerciseType: "yoga",
    imageUrl: "https://www.yogabasics.com/yogabasics2017/wp-content/uploads/2021/07/Morning-Yoga-Tips.jpeg",
  },
  climb_100_floors: {
    title: "Climb 100 Floors",
    description: "Use stairs or stair machine to climb 100 floors",
    goalType: "count",
    goalValue: 100,
    durationDays: 25,
    reward: "🏆 Stair Master Badge",
    exerciseType: "stair_climbing",
    imageUrl: "https://goqii.com/blog/wp-content/uploads/shutterstock_644579047-1024x682.jpg",
  },
  cycle_100_km: {
    title: "Cycle 100 KM in 2 Weeks",
    description: "Ride a total of 100 kilometers in 14 days",
    goalType: "distance",
    goalValue: 100,
    durationDays: 14,
    reward: "🚴‍♂️ Cycling Champ Badge",
    exerciseType: "cycling",
    imageUrl: "https://hips.hearstapps.com/hmg-prod/images/benefits-of-cycling-669908a7b9d15.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*",
  },
  squat_500: {
    title: "500 Squats in a Week",
    description: "Complete 500 squats in 7 days",
    goalType: "count",
    goalValue: 500,
    durationDays: 7,
    reward: "🏋️ Squat Beast Badge",
    exerciseType: "bodyweight",
    imageUrl: "https://images.ctfassets.net/0k812o62ndtw/6U0rOZqK0M0FXJVYTtdseB/faf1091fc76df276311dd98e2efd9661/Untitled_design___2023_03_23T132756.647_en05842add50d05d897d496e1090f21ee6.jpg",
  },
  plank_master: {
    title: "Plank Master Challenge",
    description: "Hold a plank for 2 minutes daily for 10 days",
    goalType: "consistency",
    goalValue: 10,
    durationDays: 12,
    reward: "🧱 Core Crusher Badge",
    exerciseType: "core",
    imageUrl: "https://30dayfitness.app/static/a2902a44283070e930abe70bb77cc4d6/a1eb1/planks-for-beginners.jpg",
  },
  evening_walks: {
    title: "Evening Walk Challenge",
    description: "Walk at least 2 km every evening for 20 days",
    goalType: "consistency",
    goalValue: 20,
    durationDays: 25,
    reward: "🚶‍♀️ Walk Warrior Badge",
    exerciseType: "walking",
    imageUrl: "https://www.hindustantimes.com/ht-img/img/2025/05/30/1600x900/walking_1748599927905_1748599928268.jpg",
  },
};

export const addDefaultChallenges = async () => {
  try {
    const challengesRef = ref(db, "challenges");
    await set(challengesRef, defaultChallenges);
    console.log("Default challenges added successfully");
    return true;
  } catch (error) {
    console.error("Error adding default challenges:", error);
    throw error;
  }
};

export const fetchAllChallenges = async () => {
  try {
    const challengesRef = ref(db, "challenges");
    const snapshot = await get(challengesRef);
    
    if (snapshot.exists()) {
      const data = snapshot.val();
      console.log("fetchAllChallenges: found challenges", data);
      return data;
    } else {
      console.log("fetchAllChallenges: no challenges found");
      return {};
    }
  } catch (error) {
    console.error("Error fetching challenges:", error);
    throw error;
  }
};

export const joinChallenge = async (uid, challengeId) => {
  try {
    const userChallengeRef = ref(
      db,
      `users/${uid}/joinedChallenges/${challengeId}`
    );
    await set(userChallengeRef, {
      joinedAt: new Date().toISOString(),
      progress: 0,
      status: "in_progress",
    });
  } catch (error) {
    console.error("Error joining challenge:", error);
    throw error;
  }
};

export const updateChallengeProgress = async (
  uid,
  challengeId,
  progress,
  logs = null
) => {
  const challengeRef = ref(db, `users/${uid}/joinedChallenges/${challengeId}`);
  const payload = {
    progress,
    updatedAt: new Date().toISOString(),
  };

  if (logs) {
    payload.logs = logs;
  }

  await update(challengeRef, payload);
};

export const completeChallenge = async (uid, challengeId) => {
  const challengeRef = ref(db, `users/${uid}/joinedChallenges/${challengeId}`);
  await update(challengeRef, {
    status: "completed",
    completedAt: new Date().toISOString(),
  });
};

export const fetchUserChallenges = async (uid) => {
  const userChallengesRef = ref(db, `users/${uid}/joinedChallenges`);
  const snapshot = await get(userChallengesRef);
  return snapshot.exists() ? snapshot.val() : {};
};