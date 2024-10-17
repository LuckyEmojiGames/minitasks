interface UserI {
  telegram_id: number;
  first_name: string;
  last_name: string;
  username: string;
  language_code: string;
  is_tg_premium: boolean;
  points_balance: number;
  time_to_possible_spin: number;
}

export default UserI