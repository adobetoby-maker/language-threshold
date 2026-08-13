import { describe, expect, it } from 'vitest'
import { SPEAKING_BUDGET_LIMITS } from './_budget.js'
import { SPEAKING_SESSION_LIMITS } from './_session.js'
import { createSpeakingCapabilities } from './capabilities.js'

describe('speaking capability limits', () => {
  it('publishes the enforced session and token-issuance limits without calling them connection limits', () => {
    const capabilities = createSpeakingCapabilities()
    expect(capabilities.limits).toMatchObject({
      sessionStartBudgets: {
        perAnonymousPrincipalPerHour: SPEAKING_BUDGET_LIMITS.sessionStartsPerPrincipalPerHour,
        perNetworkAddressPerHour: SPEAKING_BUDGET_LIMITS.sessionStartsPerIpPerHour,
      },
      tokenIssuanceBudgets: {
        perAnonymousPrincipalPerHour: SPEAKING_BUDGET_LIMITS.tokenIssuancesPerPrincipalPerHour,
        perNetworkAddressPerHour: SPEAKING_BUDGET_LIMITS.tokenIssuancesPerIpPerHour,
      },
      maxProviderTokenIssuancesPerSession: SPEAKING_SESSION_LIMITS.maxProviderTokenIssuances,
      browserAudioSecondsAuthoritative: false,
    })
    expect(capabilities.limits).not.toHaveProperty('grantBudgets')
  })
})
