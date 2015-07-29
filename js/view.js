var sampleView = Backbone.View.extend({
    initialize: function() {
        console.log('sampleView has been created');
    }
});


var sampleView2 = Backbone.View.extend({
    tagName: 'div',
    id: 'sampleDiv'
});


var bookView = Backbone.View.extend({
    tagName: "li",
    model: Book,

    initialize: function() {
        // lets listen to model change and update ourselves
        this.listenTo(this.model, "change", this.render);
    },

    render: function (){
        this.$el.html('<li>' + this.model.get("BookName") + '</li>');
        return this;
    }
});

var bookListView = Backbone.View.extend({
    model: BooksCollection,

    initialize: function() {
        // lets listen to model change and update ourselves
        this.listenTo(this.model, "add", this.modelUpdated);
    },

    modelUpdated: function() {
        this.render();
    },

    render: function() {
         this.$el.html('');
        this.$el.html(); // lets render this view
        
        for(var i = 0; i < this.model.length; ++i) {
            // lets create a book view to render
            var m_bookView = new bookView({model: this.model.at(i)});

            // lets add this book view to this list view
            this.$el.append(m_bookView.$el); 
            m_bookView.render(); // lets render the book           
        } 

         return this;
    }
});


var bookView2 = Backbone.View.extend({
   
    model: Book,
    tagName: 'li',
    template: '',

    events: {
        'click': "itemClicked"
    },

    itemClicked: function () {
        alert('clicked: ' + this.model.get('BookName'));
    },

    initialize: function() {
        this.template = _.template($('#bookItem').html());
    },

    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});

var bookListView2 = Backbone.View.extend({
    model: BooksCollection,

    render: function() {
        this.$el.html(); // lets render this view
        
        for(var i = 0; i < this.model.length; ++i) {
            // lets create a book view to render
            var m_bookView = new bookView2({model: this.model.at(i)});

            // lets add this book view to this list view
            this.$el.append(m_bookView.$el); 
            m_bookView.render(); // lets render the book           
        } 

         return this;
    },
});


var View1 = Backbone.View.extend({
   
    initialize: function() {
        this.render();
    },

    render: function() {
        this.$el.html(this.model.get('Message') + " from the View 1"); 
        return this;
    }
});

var View2 = Backbone.View.extend({
   
    initialize: function() {
        this.render();
    },

    render: function() {
        this.$el.html(this.model.get('Message') + " from the View 2"); 
        return this;
    }
});

var View3 = Backbone.View.extend({
    
    initialize: function() {
        this.render();
    },

    render: function() {
        this.$el.html(this.model.get('Message') + " from the View 3"); 
        return this;
    }
});

var ContainerView = Backbone.View.extend({
     myChildView: null,
     
     render: function() {
        this.$el.html("Greeting Area</p>"); 

        this.$el.append(this.myChildView.$el); 
        return this;
    }
});

