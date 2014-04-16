requirejs(
    [
        'jquery'    
    ,   'can'
    ,   'bootstrap/js/bootstrap.min'
    ,   'css!bootstrap/css/bootstrap.min'
    ,   'css!fontawesome/css/font-awesome.min.css'
    ,   'css!styles/base.css'
    ,   'controls/window'
    ]
,   function()
    {
        new Webkit.Window(
            can.$('body')
        ,   {
                view:   'views/window.mustache'
            ,   data:
                {
                    brand: 'Webkit'
                }
            }
        )
    }
)