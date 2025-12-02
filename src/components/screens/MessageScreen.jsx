"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { ArrowRight } from "lucide-react";

export default function MessageScreen({ onNext }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="px-4 md:px-6 py-10 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-6 leading-tight"
            >
                A Special Message
            </motion.h2>

            <div className="mx-auto relative w-full max-w-3xl flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className=" h-auto max-w-xl bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 rounded-2xl shadow-lg p-4 md:p-6 text-center"
                >
                    <p className="text-[#301733] text-base md:text-lg leading-relaxed overflow-y-auto max-h-[400px] pr-2">
                        𝐇𝐚𝐩𝐩𝐲 𝐁𝐢𝐫𝐭𝐡𝐝𝐚𝐲,𝐃𝐢𝐝𝐢 !
𝐋𝐞𝐭 𝐦𝐞 𝐛𝐞 𝐬𝐭𝐫𝐚𝐢𝐠𝐡𝐭 𝐲𝐨𝐮’𝐫𝐞 𝐧𝐨𝐭 𝐣𝐮𝐬𝐭 𝐚 𝐠𝐨𝐨𝐝 𝐬𝐢𝐬𝐭𝐞𝐫, 𝐲𝐨𝐮’𝐫𝐞 𝐨𝐧𝐞 𝐨𝐟 𝐭𝐡𝐞 𝐦𝐨𝐬𝐭 𝐬𝐨𝐥𝐢𝐝 𝐩𝐞𝐨𝐩𝐥𝐞 𝐢𝐧 𝐦𝐲 𝐥𝐢𝐟𝐞. 𝐘𝐨𝐮 𝐜𝐚𝐫𝐫𝐲 𝐲𝐨𝐮𝐫𝐬𝐞𝐥𝐟 𝐰𝐢𝐭𝐡 𝐚 𝐦𝐢𝐱 𝐨𝐟 𝐬𝐭𝐫𝐞𝐧𝐠𝐭𝐡,𝐤𝐢𝐧𝐝𝐧𝐞𝐬𝐬, 𝐚𝐧𝐝 𝐜𝐚𝐥𝐦 𝐭𝐡𝐚𝐭 𝐦𝐨𝐬𝐭 𝐩𝐞𝐨𝐩𝐥𝐞 𝐨𝐧𝐥𝐲 𝐩𝐫𝐞𝐭𝐞𝐧𝐝 𝐭𝐨 𝐡𝐚𝐯𝐞. 𝐀𝐧𝐝 𝐭𝐡𝐞 𝐜𝐫𝐚𝐳𝐲 𝐩𝐚𝐫𝐭? 𝐘𝐨𝐮 𝐝𝐨 𝐢𝐭 𝐞𝐟𝐟𝐨𝐫𝐭𝐥𝐞𝐬𝐬𝐥𝐲.𝐘𝐨𝐮 𝐦𝐚𝐤𝐞 𝐭𝐡𝐢𝐧𝐠𝐬 𝐛𝐫𝐢𝐠𝐡𝐭𝐞𝐫 𝐰𝐢𝐭𝐡𝐨𝐮𝐭 𝐭𝐫𝐲𝐢𝐧𝐠, 𝐲𝐨𝐮 𝐦𝐚𝐤𝐞 𝐩𝐞𝐨𝐩𝐥𝐞 𝐟𝐞𝐞𝐥 𝐜𝐚𝐫𝐞𝐝 𝐟𝐨𝐫 𝐰𝐢𝐭𝐡𝐨𝐮𝐭 𝐟𝐨𝐫𝐜𝐢𝐧𝐠 𝐢𝐭, 𝐚𝐧𝐝 𝐲𝐨𝐮 𝐡𝐚𝐧𝐝𝐥𝐞 𝐥𝐢𝐟𝐞 𝐰𝐢𝐭𝐡 𝐚 𝐥𝐞𝐯𝐞𝐥 𝐨𝐟 𝐠𝐫𝐚𝐜𝐞 𝐭𝐡𝐚𝐭’𝐬 𝐡𝐨𝐧𝐞𝐬𝐭𝐥𝐲 𝐢𝐧𝐬𝐩𝐢𝐫𝐢𝐧𝐠. 𝐈 𝐡𝐨𝐩𝐞 𝐭𝐨𝐝𝐚𝐲 𝐠𝐢𝐯𝐞𝐬 𝐲𝐨𝐮 𝐭𝐡𝐞 𝐡𝐚𝐩𝐩𝐢𝐧𝐞𝐬𝐬 𝐲𝐨𝐮 𝐠𝐢𝐯𝐞 𝐭𝐨 𝐞𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐚𝐫𝐨𝐮𝐧𝐝 𝐲𝐨𝐮.
𝐘𝐨𝐮 𝐝𝐞𝐬𝐞𝐫𝐯𝐞 𝐥𝐚𝐮𝐠𝐡𝐭𝐞𝐫, 𝐩𝐞𝐚𝐜𝐞, 𝐬𝐮𝐜𝐜𝐞𝐬𝐬, 𝐚𝐧𝐝 𝐞𝐯𝐞𝐫𝐲𝐭𝐡𝐢𝐧𝐠 𝐛𝐞𝐚𝐮𝐭𝐢𝐟𝐮𝐥 𝐭𝐡𝐚𝐭’𝐬 𝐰𝐚𝐢𝐭𝐢𝐧𝐠 𝐚𝐡𝐞𝐚𝐝. 𝐊𝐞𝐞𝐩 𝐠𝐫𝐨𝐰𝐢𝐧𝐠, 𝐤𝐞𝐞𝐩 𝐬𝐡𝐢𝐧𝐢𝐧𝐠, 𝐚𝐧𝐝 𝐤𝐞𝐞𝐩 𝐛𝐞𝐢𝐧𝐠 𝐭𝐡𝐞 𝐩𝐞𝐫𝐬𝐨𝐧 𝐰𝐡𝐨 𝐭𝐮𝐫𝐧𝐬 𝐨𝐫𝐝𝐢𝐧𝐚𝐫𝐲 𝐦𝐨𝐦𝐞𝐧𝐭𝐬 𝐢𝐧𝐭𝐨 𝐬𝐨𝐦𝐞𝐭𝐡𝐢𝐧𝐠 𝐬𝐩𝐞𝐜𝐢𝐚𝐥 𝐣𝐮𝐬𝐭 𝐛𝐲 𝐛𝐞𝐢𝐧𝐠 𝐭𝐡𝐞𝐫𝐞.
𝐄𝐧𝐣𝐨𝐲 𝐲𝐨𝐮𝐫 𝐝𝐚𝐲, 𝐃𝐢𝐝𝐢 - 𝐲𝐨𝐮 𝐠𝐞𝐧𝐮𝐢𝐧𝐞𝐥𝐲 𝐝𝐞𝐬𝐞𝐫𝐯𝐞 𝐭𝐡𝐞 𝐛𝐞𝐬𝐭.
💗
                    </p>
                </motion.div>
            </div>
        </div>
    )
}