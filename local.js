(function () {
    window.uitools.addToolButton('righttoolbuttons', 'replaceString' /* icon */ , function () {
		var list = uitools.getSelectedTracklist();
        var dlg = uitools.openDialog('dlgReplaceString', {
            show: true,
            modal: true,
            notShared: true,
            title: 'Replace String',
            tracks: list
        });
    }, 'Replace String');
})();