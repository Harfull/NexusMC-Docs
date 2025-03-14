"use client"

import { motion } from "framer-motion"
import { FileText, ChevronRight } from "lucide-react"

export default function EulaPage() {
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
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
            End User License Agreement
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
            By using our products, you acknowledge and agree to these terms. If you have any questions, contact Nexus Studios support.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

const sections = [
  {
    title: "1. Grant of License",
    content: (
      <p>
        By purchasing or using a product from Nexus Studios, you are granted a limited, non-exclusive, non-transferable, and revocable license to use it in accordance with this EULA. This license is granted solely for the intended use of the product as described in official documentation and does not include any rights beyond those explicitly stated.
      </p>
    )
  },
  {
    title: "2. Permitted Use",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>You may install and use the product for personal or commercial use as long as it remains within the scope of the granted license.</li>
          <li>You may receive updates and support as long as your license remains valid and in compliance with this agreement.</li>
          <li>You may use the product only within the terms outlined in this agreement and may not use it in any way that conflicts with applicable laws or regulations.</li>
          <li>If applicable, you may integrate our product with your systems or services provided that such integration does not violate our intellectual property rights.</li>
        </ul>
      </>
    )
  },
  {
    title: "3. Prohibited Actions",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>You may not modify, decompile, deobfuscate, reverse-engineer, or attempt to bypass security measures within the product.</li>
          <li>You may not distribute, resell, lease, sublicense, or share your license key.</li>
          <li>You may not claim ownership of or attempt to rebrand our products.</li>
          <li>You may not use our products for illegal, harmful, or unethical purposes.</li>
          <li>You may not attempt to create derivative works or competing products based on our software.</li>
          <li>You may not attempt to access, manipulate, or interfere with any internal components of our products beyond what is intended for standard usage.</li>
          <li>You may not use the product in a way that violates copyright laws or any other intellectual property protections.</li>
        </ul>
      </>
    )
  },
  {
    title: "4. License Termination",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>Your license remains valid as long as you comply with this agreement.</li>
          <li>Violation of any terms may result in immediate termination of your license without refund.</li>
          <li>We reserve the right to revoke access to products if fraudulent, unauthorized, or suspicious activity is detected.</li>
          <li>Termination of a license due to violation of these terms does not exempt you from potential legal consequences.</li>
          <li>If your license is terminated, you must immediately cease all use of the product and destroy all copies.</li>
        </ul>
      </>
    )
  },
  {
    title: "5. Intellectual Property",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>All products remain the intellectual property of Nexus Studios.</li>
          <li>You are granted a license to use the product but not to claim ownership of it.</li>
          <li>All trademarks, copyrights, and branding associated with the product remain solely owned by Nexus Studios.</li>
          <li>Unauthorized use of Nexus Studios&apos; branding, assets, or trademarks is strictly prohibited.</li>
        </ul>
      </>
    )
  },
  {
    title: "6. Limitation of Liability and Disclaimer of Warranties",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>Nexus Studios provides its products &quot;as is,&quot; without warranties of any kind, whether express or implied.</li>
          <li>We do not guarantee that our products will be free from errors, vulnerabilities, or interruptions.</li>
          <li>While we strive to provide high-quality software, Nexus Studios is not responsible for any incompatibilities, security breaches, data loss, or other issues arising from the use or inability to use our products.</li>
          <li>We are not liable for any damages, including direct, indirect, incidental, consequential, or punitive damages, arising from the use or misuse of our products.</li>
          <li>Users acknowledge that software-related risks exist and agree to assume all responsibility for using our products.</li>
          <li>Nexus Studios is not responsible for any issues caused by third-party modifications, add-ons, or external integrations.</li>
        </ul>
      </>
    )
  },
  {
    title: "7. Indemnification",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>By using our products, you agree to indemnify, defend, and hold harmless Nexus Studios and its affiliates from any claims, liabilities, damages, losses, or expenses arising from your use of our products or any violation of this agreement.</li>
          <li>You acknowledge that you are solely responsible for ensuring compliance with applicable laws while using our products.</li>
        </ul>
      </>
    )
  },
  {
    title: "8. Support and Updates",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>Nexus Studios may provide support and updates at its discretion.</li>
          <li>We are not obligated to provide updates, bug fixes, or improvements unless explicitly stated in a separate service-level agreement.</li>
          <li>Support is offered only to licensed users who comply with all terms.</li>
          <li>Updates may include new features, security patches, or compatibility adjustments, but continued access to updates may require an active subscription or license renewal.</li>
        </ul>
      </>
    )
  },
  {
    title: "9. Governing Law and Dispute Resolution",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>This EULA is governed by the laws of the United States.</li>
          <li>Any disputes arising from this agreement must first be attempted to be resolved through mediation.</li>
          <li>If mediation fails, disputes will be settled in the courts of the United States.</li>
          <li>Users agree to waive any class-action claims against Nexus Studios.</li>
        </ul>
      </>
    )
  },
  {
    title: "10. Changes to this Agreement",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>We reserve the right to update this EULA at any time.</li>
          <li>Continued use of our products after changes are made constitutes acceptance of the revised terms.</li>
          <li>It is the user&apos;s responsibility to review the EULA periodically for updates.</li>
        </ul>
      </>
    )
  }
] 