window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
})

const createInnerHtml = () => {
    const headerHtml = "<th>Profile</th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for (const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
    <tr>
        <td><img class="profile" src="${empPayrollData._profilePic}"></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDeptHtml(empPayrollData._department)}</td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
            <img name="${empPayrollData._id}" onclick="remove()" alt="delete" src="delete-black-18dp.svg" alt="delete">
            <img name="${empPayrollData._id}" alt="edit" onclick="update()" src="create-black-18dp.svg" alt="edit">
        </td>
    </tr>
    `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}
const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Mahesh',
            _gender: 'Male',
            _department: [
                'Engineer',
                'Finance'
            ],
            _salary: '450000',
            _startDate: '14 April 2022',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: 'Ellipse -2.png'
        },
        {
            _name: 'Saurob',
            _gender: 'Male',
            _department: [
                'Engineer',
                'HR'
            ],
            _salary: '500000',
            _startDate: '24 march 2022',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: 'Ellipse -3.png'
        }
    ];
    return empPayrollListLocal;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`;
    }
    return deptHtml;
}
const createEmployeeId = () =>{
    let employeeId = localStorage.getItem("EmployeeId");
    employeeId = !employeeId ? 1: (parseInt(employeeId)+1).toString();
    localStorage.setItem('EmployeeId',employeeId);
    return employeeId;
}

