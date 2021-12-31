import numpy as np
from typing import List, Tuple

def matching(scores: List[List], gender_id: List, gender_pref: List) -> List[Tuple]:
    matches = [()]
    return matches

if __name__ == "__main__":
    raw_scores = np.loadtxt('scores.txt').tolist()
    print(raw_scores)
    genders = []
    with open('genders.txt', 'r') as file:
        for line in file:
            curr = line[:-1]
            genders.append(curr)

    gender_preferences = []
    with open('gender_preferences.txt', 'r') as file:
        for line in file:
            curr = line[:-1]
            gender_preferences.append(curr)

    gs_matches = run_matching(raw_scores, genders, gender_preferences)