module.exports = function(formId) {
	var form = document.getElementById(formId),
		inputs = document.querySelectorAll('.form__input'),
		radios = document.querySelectorAll('.radio__input'),
		checkboxes = document.querySelectorAll('.checkbox__input');

	form.addEventListener('submit', function(e) {
		e.preventDefault();

		var submit = true;

		for(var i = 0; i < inputs.length; i++) {
			input = inputs[i];
			if(input.value == '') {
				submit = false;
				input.classList.add('empty');
			}
		}

		var isChecked = false;

		for(var i = 0; i < radios.length; i++) {
			radio = radios[i];

			if(isChecked === false && radio.checked === true) {
				isChecked = true;
				
				if(i != 0) {
					i = -1;
				}
			};

			radio.classList.remove('empty');

			if(isChecked === false) {
				submit = false;
				radio.classList.add('empty');
			}
		}

		for(var i = 0; i < checkboxes.length; i++) {
			checkbox = checkboxes[i];
			if(checkbox.checked == false) {
				submit = false;
				checkbox.classList.add('empty');
			}
		}

		if(submit === true) {
			for(var i = 0; i < inputs.length; i++) {
				input = inputs[i];
				input.value = '';
            }
            
            for(var i = 0; i < checkboxes.length; i++) {
				checkbox = checkboxes[i];
				checkbox.checked = false;
            }

            for(var i = 0; i < radios.length; i++) {
				radio = radios[i];
				radio.checked = false;
			}
        }
        
        console.log('submit!');
	});

	form.addEventListener('click', function(e) {
		if(e.target.classList.contains('empty')) {
			e.target.classList.remove('empty');
		}
	});
};