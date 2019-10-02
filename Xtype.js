var myGrid = Ext.create('Myapp.view.MyGridView',
    {
        title: 'My Grid'
    });
Ext.create('Ext.container.Container', {
    layout: 'vbox',
    items: [{
        xtype: 'mygrid'
    }]
});



