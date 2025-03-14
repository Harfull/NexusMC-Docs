"use client"

import { motion } from "framer-motion"
import { Shield, ChevronRight } from "lucide-react"

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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
            For any security-related inquiries, please contact Nexus Studios support.
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
        Nexus Studios is committed to ensuring the security of our products, services, and customer data. 
        This Security Policy outlines the measures we take to protect our software, servers, and user information 
        from unauthorized access, fraud, and abuse.
      </p>
    )
  },
  {
    title: "2. Data Protection and Encryption",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>All sensitive data, including user credentials, HWIDs, and IP addresses, are encrypted at rest and in transit using industry-standard security measures.</li>
          <li>Our servers and databases implement strict access controls, ensuring only authorized personnel have access to sensitive data.</li>
          <li className="font-semibold text-white">We do not share licensing data or user information with any third parties under any circumstances.</li>
        </ul>
      </>
    )
  },
  {
    title: "3. Licensing and Anti-Piracy Measures",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>We employ a robust licensing system that verifies user authentication through IP tracking, HWID logging, and online validation.</li>
          <li>Unauthorized attempts to bypass, modify, or crack our licensing system will result in immediate license termination and potential legal action.</li>
          <li>Our products may include built-in anti-piracy mechanisms that monitor and report suspicious activity.</li>
          <li>All licensing data is used exclusively for verification and improvement of our systems and is never shared with third parties.</li>
        </ul>
      </>
    )
  },
  {
    title: "4. Account and Access Security",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>Users are responsible for maintaining the security of their accounts and license keys.</li>
          <li>Sharing, reselling, or exposing your license information publicly will result in revocation of access without refund.</li>
          <li>We recommend enabling two-factor authentication (2FA) where applicable to protect accounts from unauthorized access.</li>
        </ul>
      </>
    )
  },
  {
    title: "5. Server and Infrastructure Security",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>Our servers are secured with firewalls, DDoS protection, and regular security patches.</li>
          <li>Access to critical infrastructure is restricted and monitored to prevent unauthorized access.</li>
          <li>We conduct routine security audits to identify and mitigate vulnerabilities.</li>
        </ul>
      </>
    )
  },
  {
    title: "6. Incident Response",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>In the event of a security breach or suspected compromise, Nexus Studios will investigate, mitigate risks, and notify affected users as required.</li>
          <li>We have protocols in place for logging and monitoring potential security threats in real-time.</li>
        </ul>
      </>
    )
  },
  {
    title: "7. Responsible Disclosure",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>If you discover a security vulnerability in any of our products or services, we encourage you to report it to us immediately through our support channels.</li>
          <li>We appreciate responsible disclosure and will work to address valid security concerns promptly.</li>
        </ul>
      </>
    )
  },
  {
    title: "8. Compliance and Legal Obligations",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>Nexus Studios complies with applicable data protection laws and industry security standards.</li>
          <li>We cooperate with legal authorities in cases of fraud, piracy, and security threats.</li>
        </ul>
      </>
    )
  },
  {
    title: "9. Updates to This Policy",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>We may update this Security Policy periodically to reflect improvements in security practices and legal requirements.</li>
          <li>Continued use of our services after changes are made constitutes acceptance of the revised Security Policy.</li>
        </ul>
      </>
    )
  },
  {
    title: "10. Contact Information",
    content: (
      <p>
        For any security-related inquiries, please contact Nexus Studios support.
      </p>
    )
  }
] 