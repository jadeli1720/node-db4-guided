
exports.up = function (knex) {
    return knex.schema
        .createTable('zoos', tbl => {
            tbl.increments();

            tbl.string('zoo_name', 255)
                .notNullable()

            tbl.string('address')
                .unique()
        })

        .createTable('species', tbl => {
            tbl.increments();
            tbl.string('species_name', 512)
                .unique()
        })

        .createTable('animals', tbl => {
            tbl.increments();

            tbl.string('animal_name', 255)
                .notNullable();

            //Foreign Key
            tbl.integer('species_id')
                .unsigned()
                .references('id')
                .inTable('species')
                .onDelete('CASCADE')// if the PK record is deleted
                .onUpdate('CASCADE')// if the PK record is updates
        })
        
        .createTable('zoo_animals', tbl => {
            //Foreign Key
            tbl.integer('zoo_id')
                .unsigned()
                .references('id')
                .inTable('zoos')
                .onDelete('CASCADE')// if the PK record is deleted
                .onUpdate('CASCADE')// if the PK record is updates

            //Foreign Key
            tbl.integer('animal_id')
                .unsigned()
                .references('id')
                .inTable('animals')
                .onDelete('CASCADE')// if the PK record is deleted
                .onUpdate('CASCADE')// if the PK record is updates

            //Composite Key: composes of the fk's from above
            tbl.primary(['zoo_id', 'animal_id'])
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('zoo_animals')
        .dropTableIfExists('animals')
        .dropTableIfExists('species')
        .dropTableIfExists('zoos')
};
