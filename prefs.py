import numpy as np
from typing import Dict, List
import json



def txt_to_dicts(file):
	# returns text file as a list of dicts
	return

def get_student_prefs(student: Dict, grads: List[Dict]) -> Dict:
	# Order preferences by interests and career in common (weighting carreer commonalities higher than interests)
	return

def get_grad_prefs(grad: Dict, students: List[Dict]) -> Dict:
	return

if __name__ == "__main__":
	student_data = txt_to_dicts('students.txt')
	grad_data = txt_to_dicts('grads.txt')
	student_prefs = []
	grad_prefs = []

	# get list of all the student preference orderings (list of dictionaries each holding their 'score' for each grad student)
	for student in student_data:
		sp = get_student_prefs(student, grad_data)
		student_prefs.append(sp)

	# get list of all the grad preference orderings
	for grad in grad_data:
		sp = get_student_prefs(student, grad_data)
		student_prefs.append(sp)