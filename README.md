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

<img width="1081" height="616" alt="Screenshot 2025-09-05 at 9 25 53 PM" src="https://github.com/user-attachments/assets/b6446fa5-0d9c-4dea-b6c1-a1ca4d6fc641" />

Today View


<img width="1070" height="518" alt="screenshots:desktop-totals" src="https://github.com/user-attachments/assets/7aeda5b2-5197-40d8-bbe4-8ef5637bd793" />

Total View

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

# Suggested 12-Week Alternating Plan (example)

Alternate **Day A** / **Day B**. Keep jump rope **10 min daily** (5 sessions).

### Day A — 10k Steps
- 10k steps (brisk)
- AM Abs 10 min (45/25)
- Pushups 5×3 (incline or regular)
- Jump rope 2 min × **5** (spread across day)
- PM Abs 10 min (45/25)
- Pushups 5×3
- Dead hang 10 sec

**Log:** Steps **1**, Interval **0**, Abs **2**, Pushups **2**, Rope **5**, Dead Hang **1**

### Day B — Japanese Interval (10k total)
- 5 min near-jog / 5 min brisk, repeat to **10k steps**
- AM Abs 10 min (45/25)
- Pushups 5×3
- Jump rope 2 min × **5**
- PM Abs 10 min (45/25)
- Dead hang 10 sec
- Pushups 5×3

**Log:** Steps **0**, Interval **1**, Abs **2**, Pushups **2**, Rope **5**, Dead Hang **1**

## Aesthetic
Clean, glossy, **Pokémon GO–inspired** hearts and buddy meter.
