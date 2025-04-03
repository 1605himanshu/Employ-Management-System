 localStorage.clear()
 const employees = [
  {
    "id": 1,
    "firstName": "John",
    "email": "e@e.com",
    "password": "123",
    "tasks": [
      { "title": "Task 1", "description": "Description 1", "date": "2025-02-15", "category": "Development", "active": true, "newtask": true, "completed": false, "failed": false },
      { "title": "Task 2", "description": "Description 2", "date": "2025-02-16", "category": "Testing", "active": false, "newtask": false, "completed": true, "failed": false }
    ],
    "task_count": { "active": 1, "newtask": 1, "completed": 1, "failed": 0 }
  },
  {
    "id": 2,
    "firstName": "Alice",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      { "title": "Task 1", "description": "Description 1", "date": "2025-02-15", "category": "Design", "active": true, "newtask": false, "completed": false, "failed": false },
      { "title": "Task 2", "description": "Description 2", "date": "2025-02-17", "category": "Review", "active": false, "newtask": true, "completed": false, "failed": true }
    ],
    "task_count": { "active": 1, "newtask": 1, "completed": 0, "failed": 1 }
  },
  {
    "id": 3,
    "firstName": "Michael",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      { "title": "Task 1", "description": "Description 1", "date": "2025-02-18", "category": "Development", "active": false, "newtask": true, "completed": false, "failed": false }
    ],
    "task_count": { "active": 0, "newtask": 1, "completed": 0, "failed": 0 }
  },
  {
    "id": 4,
    "firstName": "Sophia",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      { "title": "Task 1", "description": "Description 1", "date": "2025-02-19", "category": "Testing", "active": true, "newtask": false, "completed": false, "failed": false },
      { "title": "Task 2", "description": "Description 2", "date": "2025-02-20", "category": "Maintenance", "active": false, "newtask": true, "completed": false, "failed": false },
      { "title": "Task 3", "description": "Description 3", "date": "2025-02-21", "category": "Development", "active": false, "newtask": false, "completed": true, "failed": false }
    ],
    "task_count": { "active": 1, "newtask": 1, "completed": 1, "failed": 0 }
  }
];

const admin = [
  {
    "id": 1,
    "firstName": "David",
    "email": "admin@me.com",
    "password": "123"
  }
];


export const setlocalStorage = ()=>{
     localStorage.setItem('employees', JSON.stringify(employees))
     localStorage.setItem('admin', JSON.stringify(admin))
}


export const getlocalStorage = ()=>{
    const employees= JSON.parse(localStorage.getItem('employees'))
    const admin= JSON.parse(localStorage.getItem('admin'))
    return {employees, admin}
     
}