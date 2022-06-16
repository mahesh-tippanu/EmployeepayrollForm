window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function() {
        if(name.value.length == 0){
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
        }catch (e) {
            textError.textContent = e;
        }
    });

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    salary.addEventListener('input',function(){
        output.textContent=salary.value;
    });

    const month = document.querySelector('#month');
    const year = document.querySelector('#year');
    const day = document.querySelector('#day');
    const dateError = document.querySelector('.date-error');
    month.addEventListener('input',function(){
        try {
            new EmployeePayrollData().startDate = new Date(document.querySelector('#day').value + ' ' + document.querySelector('#month').value + ' ' +
                                            document.querySelector('#year').value);
            dateError.textContent = '';
        }catch (e) {
            dateError.textContent = e;
        }
    });
    day.addEventListener('input',function(){
        try {
            new EmployeePayrollData().startDate = new Date(document.querySelector('#day').value + ' ' + document.querySelector('#month').value + ' ' +
                                            document.querySelector('#year').value);
            dateError.textContent = '';
        }catch (e) {
        dateError.textContent = e;
        }
    });
    year.addEventListener('input',function(){
        try {
            new EmployeePayrollData().startDate = new Date(document.querySelector('#day').value + ' ' + document.querySelector('#month').value + ' ' +
                                            document.querySelector('#year').value);
            dateError.textContent = '';
        }catch (e) {
        dateError.textContent = e;
        }
    });
})

const save = () => {
    try {
        alert("Mahesh");
        let employeePayrollData = createEmployeePayroll();
        alert(employeePayrollData.toString());
        createAndUpdateStorage(employeePayrollData);
    }catch (e) {
        return;
    }
}

const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValueById('#name');
    } catch (e) {
        setTextValue('.text-error',e);
        throw e;
    }
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');
    let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+getInputValueById('#year');
    employeePayrollData.startDate = new Date(date);
    return employeePayrollData;
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selectedItems = [];
    allItems.forEach (item => {
        if(item.checked) selectedItems.push(item.value);
    })
    return selectedItems;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}    

const createAndUpdateStorage = (employeePayrollData) => {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));

    if(employeePayrollList != undefined){
        employeePayrollList.push(employeePayrollData);
    }else {
        employeePayrollList = [employeePayrollData];
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList))
}

const resetForm = () => {
    setValue('#name','');
    setTextValue('.text-error','');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary','');
    setTextValue('.salary-output','400000')
    setValue('#notes','');
    setValue('#day','1');
    setValue('#month','January');
    setValue('#year','2022');
    setTextValue('.date-error','');
}

const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach (item => {
        item.checked = false;
    })
}

const setTextValue = (id,value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const setValue = (id,value) => {
    const element = document.querySelector(id);
    element.value = value;
}