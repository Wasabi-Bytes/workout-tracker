# Fitness Hearts

Pokémon GO–style hearts. Earn up to **3/day**. Program length **8–16 weeks**. Works on **mobile and desktop**. Data saved **locally**.

## Features
- 6 activities; tap to log (caps enforced)
- Program meter (5 hearts) + “Today” fill
- Totals: miles/km, minutes, reps, kcal (weight-aware)
- No accounts/servers; uses `localStorage`

## Cardio Rule (for the 3rd heart)
10k Steps **or** Japanese Interval (10k) **or** **10 min** jump rope (5×2 min).

## Screenshots

<img width="1083" height="699" alt="screenshots:mobile-today" src="https://github.com/user-attachments/assets/f24c619d-1095-48a8-bbc6-1a73f1796a1d" />

Today View


## Use<img width="1070" height="518" alt="screenshots:desktop-totals" src="https://github.com/user-attachments/assets/7aeda5b2-5197-40d8-bbe4-8ef5637bd793" />

Total View

1. Set start date + weeks (8–16). Optionally enter **Weight (lb)**.
2. Log daily on **Today**. Review rollups on **Totals**.

## Math (totals)
- Distance: `(10k Steps × 5 mi) + (Japanese Interval × 5 mi)` → also shown in km  
- Abs: `sessions × 10 min`  
- Pushups: `sessions × 15`  
- Rope: `sessions × 2 min`  
- Dead Hang: `sessions × 10 sec`  
- Calories: weight-based estimate
