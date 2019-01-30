$(function () {
	if (localStorage.getItem('modalYesBtn') != 1) {
		showStartModal();
	}
});

function showStartModal () {
	setTimeout(function() {
		$('#exampleModal').modal('show');
		$('#modal-yes-btn').click(function () {
			// save state modal
			$('#exampleModal').modal('hide');
			localStorage.setItem('modalYesBtn',1);
		});
	},500);
}