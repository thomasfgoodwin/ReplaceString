/*
    title: Replace String
    description: To replace specified strings in Song Title, Artist, Album, Album Artist, and Composer fields.
    author: MPG IT Consulting, Thomas F Goodwin
*/

var objTrackList;

function btnOkClick() {
	var itmRec;
	var ddDestination = qid('ddDestination').controlClass.value;
	var edtSearchStr = qid('edtSearchStr').controlClass.value;
	var edtReplaceStr = qid('edtReplaceStr').controlClass.value;

	if (ddDestination == ""){
        messageDlg('You must select a value from the drop down.', 'Error', ['btnOk'], {
        }, function (result) {
			return;
        });
	}else if (edtSearchStr == ""){
		messageDlg('You must enter a value to search for.', 'Error', ['btnOK'], {
		}, function (result) {
			return;
		});
	}
	switch(ddDestination){
		case "All":
			objTrackList.forEach(function (itmRec) {
				let str = itmRec.title;
				itmRec.title = str.replaceAll(edtSearchStr, edtReplaceStr);

				str = itmRec.artist;
				itmRec.artist = str.replaceAll(edtSearchStr, edtReplaceStr);

				str = itmRec.album;
				itmRec.album = str.replaceAll(edtSearchStr, edtReplaceStr);

				str = itmRec.albumArtist;
				itmRec.albumArtist = str.replaceAll(edtSearchStr, edtReplaceStr);

				str = itmRec.composer;
				itmRec.composer = str.replaceAll(edtSearchStr, edtReplaceStr);
			});
			break;
		case "Title":
			objTrackList.forEach(function (itmRec) {
				let str = itmRec.title;
				itmRec.title = str.replaceAll(edtSearchStr, edtReplaceStr);
			});
			break;
		case "Artist":
			objTrackList.forEach(function (itmRec) {
				let str = itmRec.artist;
				itmRec.artist = str.replaceAll(edtSearchStr, edtReplaceStr);
			});
			break;
		case "Album":
			objTrackList.forEach(function (itmRec) {
				let str = itmRec.album;
				itmRec.album = str.replaceAll(edtSearchStr, edtReplaceStr);
			});
			break;
		case "Album Artist":
			objTrackList.forEach(function (itmRec) {
				let str = itmRec.albumArtist;
				itmRec.albumArtist = str.replaceAll(edtSearchStr, edtReplaceStr);
			});
			break;
		case "Composer":
			objTrackList.forEach(function (itmRec){
				let str = itmRec.composer;
				itmRec.composer = str.replaceAll(edtSearchStr, edtReplaceStr);
			});
			break;
	}

	app.setValue('ReplaceString', {
		ddDestination: qid('ddDestination').controlClass.value,
		edtSearchStr: qid('edtSearchStr').controlClass.value,
		edtReplaceStr: qid('edtReplaceStr').controlClass.value
	});
	objTrackList.commitAsync();
	closeWindow();
}

function btnCancelClick() {}

function init(params) {
	this.title = params.title;
	this.resizeable = true;
	objTrackList = params.tracks;

	var objMem = app.getValue('ReplaceString', {
		ddDestination: qid('ddDestination').controlClass.value,
		edtSearchStr: qid('edtSearchStr').controlClass.value,
		edtReplaceStr: qid('edtReplaceStr').controlClass.value
	});

	qid('ddDestination').controlClass.value = objMem.ddDestination;
	qid('edtSearchStr').controlClass.value = objMem.edtSearchStr;
	qid('edtReplaceStr').controlClass.value = objMem.edtReplaceStr;

	if (objTrackList === undefined) {
		messageDlg(_("Select tracks to be updated"), 'Error', ['btnOK'], {
			defaultButton: 'btnOK'
		}, function (result) {
			modalResult = 0;
		});
		return;
	};

	if (objTrackList.count === 0) {
		messageDlg(_("Select tracks to be updated"), 'Error', ['btnOK'], {
			defaultButton: 'btnOK'
		}, function (result) {
			modalResult = 0;
		});
		return;
	};

    window.localListen(qid('btnOK'), 'click', btnOkClick);
    window.localListen(qid('btnCancel'), 'click', btnCancelClick, true);
}
