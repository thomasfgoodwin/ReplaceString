// A simple script that replaces a specified string in Song Title, Artist, Album, Album Artist or Composer

actions.replaceString = {
	title: _('Replace String') + '...',
	hotkeyAble: true,
	icon:'replaceString',
	disabled: uitools.notMediaListSelected,
    visible: window.uitools.getCanEdit,
    execute: async function () {
		// get list of selected songs
		var list = uitools.getSelectedTracklist();
        var dlg = uitools.openDialog('dlgReplaceString', {
            show: true,
            modal: true,
            title: _('Replace String'),
            tracks: list
        });
	}
}

window._menuItems.editTags.action.submenu.push({
        action: actions.replaceString,
        order: 20,
        grouporder: 20
});
