interface ReferralLevels {
    FIRST_LEVEL_REFERRAL: number;
    SECOND_LEVEL_REFERRAL: number;
    THIRD_LEVEL_REFERRAL: number;
}

interface ReferralsProgramI {
    default: ReferralLevels;
    tg_premium: ReferralLevels;
}

export default ReferralsProgramI