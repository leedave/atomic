function AtomicActionButton() 
{
    this.registry = [];
    this.element;
    var myClass = this;
    
    this.initHtml = function(element, newItemId) 
    {
        this.element = element;
        this.element.data('atomic-global-id', newItemId);
        this.element.addClass('animated');
        this.element.on("click touch", myClass.setInactive);
    };
    
    this.setInactive = function() 
    {
        setTimeout(function() {
            myClass.element.attr('disabled', 'disabled');
        }, 300);
        
    };
    
    this.reset = function(targetId) 
    {
        var target = jQuery('#'+targetId);
        target.removeAttr('disabled');
    };
    
    this.initAllItems = function() 
    {
        var globalClass = this;
        jQuery('button.atomicActionButton').each(function() {
            if (!jQuery(this).parent().hasClass('sourceCode')) {
                var newItem = new AtomicActionButton();
                var newItemId = globalClass.registry.length;
                newItem.initHtml(jQuery(this), newItemId);
                globalClass.registry.push(newItem);
            }
        });
    };    
};

