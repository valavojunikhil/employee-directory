(function($) {
	'use strict';
	function areMatching(s1, s2) {
		// check if both the strings match and return true
		s1 = s1.toLowerCase();
		s2 = s2.toLowerCase();
		return s1.indexOf(s2) > -1 || s2.indexOf(s1) > -1;
	}
	
	function search () {
		// 1.select search inputs and get search values
		var $employeeName, $designation, $age;
		$employeeName= $('#employeeName');
		$designation = $('#designation');
		$age = $('#age');
		var employeeNameValue = $employeeName.val(),
			designationValue = $designation.val(),
			ageValue = $age.val(); 
		console.log($employeeName, $designation, $age);
		console.log(employeeNameValue, designationValue, ageValue);
		// 2.get employee list
		var $rows = $('#data > tr');
		// 3.loopover employees list and hide non matching ones
		for(var i = 0, l = $rows.length; i < l; i++) {
			console.log($rows.eq(i));
			var $row = $rows.eq(i), $columns = $row.children();
			console.log($columns.eq(0).text(), $columns.eq(1).text(), $columns.eq(2).text());
			if(areMatching($columns.eq(0).text(), employeeNameValue) && areMatching($columns.eq(1).text(), designationValue ) && areMatching($columns.eq(2).text(), ageValue )){
				$row.show();
			} else {
				$row.hide();
			}
		}
	}
	
	$(document).ready(function() {
		var $form = $('#form');
		$form.on('submit', function(e) {
			e.preventDefault();
			search();
			return false;
		});
	});
	
})(jQuery);