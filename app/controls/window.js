define(
    [
		'controls/base'
	]
,	function()
	{
		can.Control(
            'Webkit.Window'
        ,   {
                defaults:
                {
                    view: undefined
                ,   data: undefined
                }
            }
        ,   {
                init: function(element,options)
                {
                    var gui
                    =   require('nw.gui')
                    
                    this.win
                    =   gui.Window.get()
                    
                    can.append(
                        element
                    ,   can.view(
                            options.view
                        ,   options.data
                        )
                    )
                }
            
            ,   '.minimize-window click': function(el,ev)
                {
                    this.win.minimize()
                }
            
            ,   '.mazimize-window click': function()
                {
                   this.win.maximize()
                }
            
            ,   '.close-window click': function()
                {
                    var $modal
                    =   can.$('<div>')
                    
                    $modal
                        .html(
                            can.view(
                                'views/modal-confirm.mustache'
                            ,   {
                                    title: 'Se cerrará la aplicación'
                                ,   confirm: '¿Esta seguro que desea cerrar la aplicacion?'
                                ,   button: 'Si'
                                }
                            )
                        )
                    
                    $modal
                        .appendTo(
                            this.element
                        )
                }
            
            ,   '.modal .btn-primary click': function()
                {
                    this.win.close()
                }
            }
        )
	}
)