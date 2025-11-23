import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Users, Award, Target } from "lucide-react";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Four = () => {
    const [currentGradient, setCurrentGradient] = useState(0);

    const gradients = [
        "from-orange-500 via-red-500 to-pink-500",
        "from-blue-500 via-purple-500 to-pink-500",
        "from-green-500 via-teal-500 to-blue-500",
        "from-yellow-500 via-orange-500 to-red-500"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentGradient((prev) => (prev + 1) % gradients.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [gradients.length]);

    const floatingAnimation = {
        initial: { y: 0 },
        animate: {
            y: [-10, 10, -10],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const features = [
        {
            icon: <Star className="w-8 h-8" />,
            title: "Expert Guidance",
            description: "Learn from certified trainers with proven track records"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "State-of-the-Art Facilities",
            description: "Train with the latest equipment and technology"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Supportive Community",
            description: "Join thousands of members motivating each other"
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Proven Results",
            description: "Achieve your fitness goals with our science-backed methods"
        }
    ];

    const stats = [
        { number: "8+", label: "Years of Experience" },
        { number: "10K+", label: "Happy Customers" },
        { number: "30+", label: "Expert Trainers" },
        { number: "50+", label: "Programs Available" }
    ];

    const trainers = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Head Strength Coach",
            experience: "12+ years",
            specialty: "Powerlifting & Strength",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            certifications: ["NASM", "ACE", "CrossFit L3"]
        },
        {
            id: 2,
            name: "Mike Rodriguez",
            role: "Yoga & Mobility Expert",
            experience: "8+ years",
            specialty: "Flexibility & Recovery",
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            certifications: ["RYT-500", "Yoga Alliance"]
        },
        {
            id: 3,
            name: "Emily Chen",
            role: "Nutrition Specialist",
            experience: "10+ years",
            specialty: "Sports Nutrition",
            image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            certifications: ["RD", "CSSD", "Precision Nutrition"]
        },
        {
            id: 4,
            name: "David Thompson",
            role: "HIIT Coach",
            experience: "6+ years",
            specialty: "Metabolic Conditioning",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThEqdK0PlEm90ptcr-2xCSWorqItOIN9cobQ&s",
            certifications: ["NASM", "ACE HIIT"]
        },
        {
            id: 5,
            name: "Lisa Parker",
            role: "Senior Personal Trainer",
            experience: "15+ years",
            specialty: "Weight Loss & Transformation",
            image: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            certifications: ["ISSA", "ACE", "TRX"]
        },
        {
            id: 6,
            name: "Carlos Martinez",
            role: "Boxing Coach",
            experience: "9+ years",
            specialty: "Combat Fitness",
            image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            certifications: ["USA Boxing", "NASM"]
        },
        {
            id: 7,
            name: "Jessica Williams",
            role: "Pilates Instructor",
            experience: "7+ years",
            specialty: "Core Strength & Posture",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            certifications: ["Pilates Method Alliance", "Balanced Body"]
        },
        {
            id: 8,
            name: "James Wilson",
            role: "Senior Bodybuilding Coach",
            experience: "14+ years",
            specialty: "Muscle Building",
            image: "data:image/jpeg;base64,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",
            certifications: ["IFBB Pro", "NASM", "Precision Nutrition"]
        },
        {
            id: 9,
            name: "Amanda Roberts",
            role: "Rehabilitation Specialist",
            experience: "11+ years",
            specialty: "Injury Prevention & Recovery",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            certifications: ["DPT", "CSCS", "FMS"]
        },
        {
            id: 10,
            name: "Kevin Brown",
            role: "Endurance Coach",
            experience: "8+ years",
            specialty: "Marathon & Triathlon",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            certifications: ["USAT", "RRCA", "NASM"]
        }
    ];

    const teamStats = [
        { number: "30+", label: "Expert Trainers" },
        { number: "200+", label: "Certifications" },
        { number: "15k+", label: "Sessions Completed" },
        { number: "98%", label: "Client Satisfaction" }
    ];

    return (
        <>
            {/* IGNITE Hero Section */}
            <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 p-6 md:p-12 transition-all duration-500 relative overflow-hidden">

                {/* Animated Background Particles */}
                <div className="absolute inset-0 z-0">
                    <CanvasRevealEffect
                        animationSpeed={2}
                        containerClassName="bg-transparent"
                        colors={[
                            [59, 130, 246], // blue-500
                            [139, 92, 246], // violet-500
                            [236, 72, 153], // pink-500
                            [249, 115, 22], // orange-500
                        ]}
                        dotSize={3}
                        reverse={true}
                        showGradient={true}
                    />
                </div>

                {/* Gradient Orbs */}
                <div className="absolute top-1/4 -left-20 w-72 h-72 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 min-h-screen">

                    {/* Text Content */}
                    <motion.div
                        className="flex-1 space-y-8 text-center md:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <h1 className="text-5xl md:text-7xl font-black leading-tight">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={currentGradient}
                                            className={`bg-gradient-to-r ${gradients[currentGradient]} bg-clip-text text-transparent`}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 1.2 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            IGNITE
                                        </motion.span>
                                    </AnimatePresence>
                                    <br />
                                    <span className="text-gray-800 dark:text-white bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                                        Your Ultimate Fitness Revolution
                                    </span>
                                </h1>
                            </motion.div>

                            <motion.h2
                                className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                Transform Your Body. Elevate Your Mind. Dominate Your Life.
                            </motion.h2>

                            <motion.p
                                className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium max-w-2xl mx-auto md:mx-0"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                Experience the future of fitness with AI-powered workout tracking,
                                real-time progress analytics, personalized nutrition plans, and a
                                global community of champions pushing their limits every day.
                            </motion.p>
                        </div>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                        >
                            <motion.button
                                className="relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-black py-4 px-12 rounded-2xl text-xl transition-all duration-300 shadow-2xl group overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10">Start Your Transformation 🚀</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </motion.button>

                            <motion.button
                                className="border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Watch Demo 🎬
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                        className="flex-1 max-w-lg flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <div className="relative w-full">
                            <motion.div
                                className="relative w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 dark:border-gray-700/30"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.5 }}
                            >
                                <img
                                    src="https://gymkear.mern.designtocodes.com/_next/static/media/About_img.6362eab2.png"
                                    alt="Fitness App Interface"
                                    className="w-full h-auto transform transition-transform duration-500"
                                />

                                {/* Floating Elements */}
                                <motion.div
                                    className="absolute top-6 left-6 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-4 shadow-2xl border-2 border-white/30"
                                    variants={floatingAnimation}
                                    initial="initial"
                                    animate="animate"
                                >
                                    <p className="text-white font-bold text-sm">🔥 250 Cal</p>
                                </motion.div>

                                <motion.div
                                    className="absolute top-6 right-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-4 shadow-2xl border-2 border-white/30"
                                    variants={floatingAnimation}
                                    initial="initial"
                                    animate="animate"
                                    transition={{ delay: 1 }}
                                >
                                    <p className="text-white font-bold text-sm">💪 12K Steps</p>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Original Four Component Content */}
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 px-6 md:px-12 relative overflow-hidden">

                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-orange-400 to-red-500 rounded-full blur-3xl opacity-10"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-10"></div>

                <div className="max-w-7xl mx-auto">

                    {/* Header Section */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-6">
                            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                                Discover Our Mission
                            </span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
                            At <span className="font-black text-orange-500">IGNITE</span>, we believe in empowering you to reach your full potential.
                            Our mission is to transform lives through Habits, one workout at a time.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

                        {/* Video Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 dark:border-gray-700/50">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-auto rounded-2xl"
                                >
                                    <source src="/home introvideo.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                {/* Video Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/30 cursor-pointer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Floating Stats */}
                            <motion.div
                                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-200 dark:border-gray-700"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-center">
                                    <div className="text-2xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                                        95%
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                                        Success Rate
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-200 dark:border-gray-700"
                                initial={{ opacity: 0, y: -30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-center">
                                    <div className="text-2xl font-black bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                                        #1
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                                        Rated App
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Features Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h3 className="text-3xl md:text-4xl font-black text-gray-800 dark:text-white mb-8">
                                Why Choose <span className="text-orange-500">IGNITE</span>?
                            </h3>

                            <div className="grid gap-6">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={feature.title}
                                        className="flex items-start gap-4 p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.02, y: -5 }}
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-black text-gray-800 dark:text-white mb-2">
                                                {feature.title}
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Stats Section */}
                    <motion.div
                        className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className="text-center p-8 rounded-3xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-white/20 shadow-lg"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Expert Team Section with Multiple Trainers */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl md:text-4xl font-black text-gray-800 dark:text-white mb-4">
                            Meet Our <span className="text-orange-500">Elite Trainers</span>
                        </h3>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                            Our team of certified professionals brings decades of combined experience to help you achieve extraordinary results
                        </p>

                        {/* Main Trainer Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
                            {trainers.map((trainer, index) => (
                                <motion.div
                                    key={trainer.id}
                                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-500"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                >
                                    {/* Trainer Image */}
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={trainer.image}
                                            alt={trainer.name}
                                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                        {/* Experience Badge */}
                                        <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                            {trainer.experience}
                                        </div>

                                        {/* Specialty Badge */}
                                        <div className="absolute bottom-4 left-4 bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                            {trainer.specialty}
                                        </div>
                                    </div>

                                    {/* Trainer Info */}
                                    <div className="p-6">
                                        <h4 className="text-xl font-black text-gray-800 dark:text-white mb-1">
                                            {trainer.name}
                                        </h4>
                                        <p className="text-orange-500 font-semibold mb-3">{trainer.role}</p>

                                        {/* Certifications */}
                                        <div className="flex flex-wrap gap-1 mb-4">
                                            {trainer.certifications.map((cert, certIndex) => (
                                                <span
                                                    key={certIndex}
                                                    className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full font-medium"
                                                >
                                                    {cert}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action Button */}
                                        <motion.button
                                            className="w-full bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-700 dark:to-gray-800 hover:from-orange-500 hover:to-red-500 text-white font-bold py-2 px-4 rounded-xl transition-all duration-300 text-sm"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Book Session
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Team Stats Overview */}
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            {teamStats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className="text-center p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-300 mt-2">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Group Photo Section */}
                        <motion.div
                            className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 dark:border-gray-700/50 max-w-6xl mx-auto mb-12"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt="Our Elite Training Team"
                                className="w-full h-64 md:h-96 object-cover"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                            {/* Content Overlay */}
                            <div className="absolute bottom-6 left-6 right-6 text-left">
                                <h4 className="text-2xl md:text-3xl font-black text-white mb-3">
                                    One Team, One Mission: Your Success
                                </h4>
                                <p className="text-white/90 font-medium text-lg max-w-3xl">
                                    Our diverse team of 30+ certified professionals brings together expertise from every corner of the fitness world.
                                    From Olympic athletes to rehabilitation specialists, we're united by one goal: helping you become the best version of yourself.
                                </p>
                            </div>
                        </motion.div>

                        {/* CTA Section */}
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-2xl md:text-3xl font-black text-gray-800 dark:text-white mb-4">
                                Ready to Start Your Transformation?
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                                Get matched with the perfect trainer for your goals and schedule your first session today!
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.button
                                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-black py-4 px-8 rounded-2xl text-lg transition-all duration-300 shadow-2xl"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Book Free Consultation
                                </motion.button>
                                <motion.button
                                    className="border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    👥 Meet All Trainers
                                </motion.button>
                            </div>

                            {/* Final CTA Button */}
                            <motion.button
                                className="mt-12 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-black py-4 px-12 rounded-2xl text-lg transition-all duration-300 shadow-2xl"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Join Our Community Today 🚀
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Four;