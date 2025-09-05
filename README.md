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

<figure>
  <img src="screenshots/mobile-today.png" alt="Mobile Today tab with tappable hearts for 10k Steps, Japanese Interval, Abs, Pushups, Jump Rope, Dead Hang" />
  <figcaption><strong>Mobile — Today tab.</strong> Tap hearts to log; daily cap is 3.</figcaption>
</figure>

<figure>
  <img src="screenshots/desktop-totals.png" alt="Desktop Totals tab showing Program Hearts, Days Active, Walking Distance (mi/km), session counts, time, and estimated calories" />
  <figcaption><strong>Desktop — Totals tab.</strong> Shows distance (mi/km), minutes, reps, and calories. Progress is stored locally.</figcaption>
</figure>

## Use
1. Set start date + weeks (8–16). Optionally enter **Weight (lb)**.
2. Log daily on **Today**. Review rollups on **Totals**.

## Math (totals)
- Distance: `(10k Steps × 5 mi) + (Japanese Interval × 5 mi)` → also shown in km  
- Abs: `sessions × 10 min`  
- Pushups: `sessions × 15`  
- Rope: `sessions × 2 min`  
- Dead Hang: `sessions × 10 sec`  
- Calories: weight-based estimate

