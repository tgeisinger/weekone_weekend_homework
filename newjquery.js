$(document).ready(function() {
    var array = [];

    var key = 0;

    $('#employeeinfo').on('submit', function(event) {
        event.preventDefault();

        var values = {};
        $.each($('#employeeinfo').serializeArray(), function(i, field) {
            values[field.name] = field.value;
        });

        console.log(values);

        // clear out inputs
        $('#employeeinfo').find('input[type=text]').val('');

        values.key = key++;

        // add to list
        array.push(values);

        // append to DOM
        appendDom(values);

        var totalSalary = calTotalSalaries(array);

        $('#monthly').text(Math.round(totalSalary / 12));









    });

    function calTotalSalaries(salaries) {
        var totalSalaries = 0;
        for (var i = 0; i < salaries.length; i++) {
            totalSalaries += parseInt(salaries[i].salary);

        }
        return (totalSalaries);


    }



    function appendDom(empInfo) {
        $('#container').append('<div class="person"></div>');
        var $el = $('#container').children().last();


        var deleteBtn = document.createElement('button');

        $(deleteBtn).text('Delete Employee');
        //setting a atttribute of key to the button. 'key' is the name of attribute. empInfo is the value you want to set it to.
        $(deleteBtn).attr('key', empInfo.key);
        $(deleteBtn).on('click', function() {
            //this refers to the button being pressed.
            var key = $(this).attr('key');
            for (var i = 0; i < array.length; i++) {
                if (array[i].key == key) {
                    array.splice(i, 1);
                }
            }

            var parent = $(deleteBtn).parent();

            $(parent).remove()





        });

        $el.append(deleteBtn);
        $el.append('<p id = "t">' + ' First Name: ' + empInfo.employeefirstname + '</p>');
        $el.append('<p id = "t">' + ' Last Name: ' + empInfo.employeelastname + '</p>');
        $el.append('<p id = "t">' + ' ID# ' + empInfo.employeeidnumber + '</p>');
        $el.append('<p id = "t">' + ' Job Title: ' + empInfo.jobtitle + '</p>');
        $el.append('<p id = "t">' + ' Annual Salary: ' + empInfo.salary + '</p>');







    };


});
