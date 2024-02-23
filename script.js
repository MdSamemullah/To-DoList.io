// var input = document.getElementById("input");
        // var add = document.getElementById("add"); mistake 





        let age = Number(prompt("please enter your Age?"));
        if(age<18){
            alert("your not adult,please comeback after 18 year old");
        } else if(age >=18 && age <=60){
            alert("welcome to our ToDo owebsite");
        } else {
            alert("ristricted")
        }
        var ol = document.getElementById("list");

        function add() {
            var listItem = document.createElement("li");
            listItem.innerHTML = input.value+ " <button onclick='deletelist(event)'>delete</button>" + "<hr>";
            ol.append(listItem);
        }

        function deletelist(event) {
            event.target.parentElement.remove();
        }