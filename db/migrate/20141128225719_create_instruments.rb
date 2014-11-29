class CreateInstruments < ActiveRecord::Migration
  def change
    create_table :instruments do |t|

    	t.string :type, null: false
    	t.string :class
    	t.boolean :electric
    	t.string :make
    	t.string :model
    	t.string :photo_url
    	t.integer :manufacture_year
    	t.integer :acquire_year
    	t.string :description

      t.timestamps null: false
    end
  end
end
