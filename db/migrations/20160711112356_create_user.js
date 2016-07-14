(function(){

  var createTable= function(knex){
    return knex.schema.createTable('users', function(table){

     table.increments('id').primary(); 

     table.string('username')
      .notNullable();
     
    table.timestamp('created_at')
      .notNullable()
      .defaultTo(knex.raw('now()'));
    
   table.timestamp('updated_at')
      .notNullable()
      .defaultTo(knex.raw('now()'));
    });
  };

  var dropTable = function(table){
    return knex.schema.dropTable('users');
  };

  exports.up = function(knex, Promise) {
    return createTable(knex);
  };

  exports.down = function(knex, Promise) {
   return dropTable(knex); 
  };
}());
