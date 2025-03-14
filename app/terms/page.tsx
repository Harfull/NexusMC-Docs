"use client"

import { motion } from "framer-motion"
import { Shield, ChevronRight } from "lucide-react"

export default function TermsPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  }

  return (
    <div className="min-h-screen pt-24 md:pt-32">
      {/* Gradient Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-[400px] -right-[400px] w-[800px] h-[800px] rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute -bottom-[400px] -left-[400px] w-[800px] h-[800px] rounded-full bg-pink-500/5 blur-3xl" />
      </div>

      <motion.div 
        initial="hidden"
        animate="visible"
        className="relative container mx-auto px-4 py-16 max-w-4xl"
      >
        {/* Header */}
        <motion.div 
          variants={fadeIn}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-400 text-lg">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div 
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="space-y-8"
        >
          {sections.map((section, index) => (
            <motion.section
              key={index}
              variants={fadeIn}
              className="glass-card rounded-xl p-6 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/20 transition-colors"
            >
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <ChevronRight className="h-5 w-5 text-primary" />
                {section.title}
              </h2>
              <div className="prose prose-invert max-w-none prose-p:text-gray-300 prose-li:text-gray-300">
                {section.content}
              </div>
            </motion.section>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          variants={fadeIn} 
          className="mt-12 text-center text-sm text-gray-400"
        >
          <p>
            For any questions about these terms, please contact our support team.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

const sections = [
  {
    title: "1. Introduction",
    content: (
      <p>
        Welcome to Nexus Studios. These Terms of Service (&quot;Terms&quot;) govern your use of our products, services, and website. 
        By purchasing, downloading, or using any of our products, you agree to these Terms in full. 
        If you do not agree, you must not use our services.
      </p>
    )
  },
  {
    title: "2. License and Usage",
    content: (
      <>
        <p>
          Nexus Studios grants you a limited, non-exclusive, non-transferable, and revocable license to use our products as intended.
        </p>
        <p className="font-medium text-white mt-4 mb-2">You are prohibited from:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Distributing, sharing, or reselling our products.</li>
          <li>Decompiling, reverse engineering, modifying, or creating derivative works.</li>
          <li>Sharing or disclosing your license key publicly.</li>
          <li>Using our products for illegal or unauthorized purposes.</li>
        </ul>
      </>
    )
  },
  {
    title: "3. Payments and Refunds",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>All purchases are final and non-refundable unless explicitly stated otherwise.</li>
          <li>We sell our products through BuiltByBit, and payments are processed through their platform. Nexus Studios does not collect or store payment details.</li>
        </ul>
      </>
    )
  },
  {
    title: "4. Licensing and Authentication",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>Our products may require online authentication, including IP tracking, HWID logging, and account verification.</li>
          <li>Any attempt to bypass or manipulate our licensing system will result in immediate termination of your license without refund.</li>
        </ul>
      </>
    )
  },
  {
    title: "5. Termination and Revocation",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>We reserve the right to revoke your license or access to our services at any time for violations of these Terms.</li>
          <li>If your license is revoked, you are not entitled to a refund or compensation.</li>
        </ul>
      </>
    )
  },
  {
    title: "6. Liability Disclaimer",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>Our products are provided &quot;as is&quot; without warranties of any kind.</li>
          <li>Nexus Studios is not liable for any damages, data loss, or system failures resulting from the use of our products.</li>
          <li>You agree to use our software at your own risk.</li>
        </ul>
      </>
    )
  },
  {
    title: "7. Privacy and Data Collection",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>We collect IP addresses, HWIDs, Discord account details, and usage data to enforce licensing and prevent fraud.</li>
          <li>Personal information is handled as per our Privacy Policy.</li>
        </ul>
      </>
    )
  },
  {
    title: "8. Updates and Modifications",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>We may update or modify our products at any time without prior notice.</li>
          <li>We are not obligated to provide updates, fixes, or new features.</li>
        </ul>
      </>
    )
  },
  {
    title: "9. Governing Law",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>These Terms are governed by and construed in accordance with the laws of Florida, United States.</li>
          <li>Any disputes shall be resolved in the courts of Florida, United States.</li>
        </ul>
      </>
    )
  },
  {
    title: "10. Changes to These Terms",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>Nexus Studios reserves the right to update these Terms at any time.</li>
          <li>Continued use of our services after changes are made constitutes acceptance of the revised Terms.</li>
        </ul>
      </>
    )
  },
  {
    title: "11. Contact Information",
    content: (
      <p>
        For any inquiries regarding these Terms, please contact Nexus Studios support.
      </p>
    )
  }
] 