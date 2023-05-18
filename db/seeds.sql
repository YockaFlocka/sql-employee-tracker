INSERT INTO departments (department_name)
  VALUES
  ("Human Resources"),
  ("Career Services"),
  ("Customer Service");

INSERT INTO roles (job_title, role_salary, department_id)
  VALUES
  ("HR Representative", 70000, 1),
  ("HR Call Desk", 50000, 1),
  ("Career Counseler", 60000, 2),
  ("Career Services Manager", 90000, 2),
  ("Customer Service Rep", 40000, 3),
  ("Customer Service Manager", 80000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
  VALUES
  ("Buddy", "Man", 4, NULL),
  ("Frank", "Castle", 4, NULL),
  ("Guy", "Fieri", 6, NULL);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
  VALUES
  ("Jake", "Grape", 1, 1),
  ("Yoda", "Green", 1, 1),
  ("Luke", "Skywalker", 2, 1),
  ("Jackie", "Armstrong", 3, 2),
  ("Mike", "Connell", 5, 3);