// Domain management utilities
import { domainMappings, CANONICAL_DOMAIN, getOrgConfigForDomain, getAllDomains } from './metadata'

/**
 * Get all domains for ASIU organization
 */
export function getASIUDomains(): string[] {
  return domainMappings.asiu
}

/**
 * Get all domains for CSIU organization
 */
export function getCSIUDomains(): string[] {
  return domainMappings.csiu
}

/**
 * Get the canonical domain
 */
export function getCanonicalDomain(): string {
  return CANONICAL_DOMAIN
}

/**
 * Check if a domain belongs to ASIU
 */
export function isASIUDomain(domain: string): boolean {
  return domainMappings.asiu.includes(domain)
}

/**
 * Check if a domain belongs to CSIU
 */
export function isCSIUDomain(domain: string): boolean {
  return domainMappings.csiu.includes(domain)
}

/**
 * Get organization type for a domain
 */
export function getOrganizationType(domain: string): 'asiu' | 'csiu' | null {
  if (isASIUDomain(domain)) return 'asiu'
  if (isCSIUDomain(domain)) return 'csiu'
  return null
}

/**
 * Add a new domain to an organization
 */
export function addDomainToOrganization(domain: string, orgType: 'asiu' | 'csiu'): void {
  if (!domainMappings[orgType].includes(domain)) {
    domainMappings[orgType].push(domain)
  }
}

/**
 * Remove a domain from an organization
 */
export function removeDomainFromOrganization(domain: string, orgType: 'asiu' | 'csiu'): void {
  const index = domainMappings[orgType].indexOf(domain)
  if (index > -1) {
    domainMappings[orgType].splice(index, 1)
  }
}

/**
 * Get all domains across both organizations
 */
export function getAllOrganizationDomains(): string[] {
  return getAllDomains()
}

/**
 * Validate if a domain is configured
 */
export function isDomainConfigured(domain: string): boolean {
  return getAllDomains().includes(domain)
}

/**
 * Get domain configuration summary
 */
export function getDomainSummary() {
  return {
    canonical: CANONICAL_DOMAIN,
    asiu: {
      domains: domainMappings.asiu,
      count: domainMappings.asiu.length
    },
    csiu: {
      domains: domainMappings.csiu,
      count: domainMappings.csiu.length
    },
    total: getAllDomains().length
  }
}

