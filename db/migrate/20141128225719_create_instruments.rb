class CreateInstruments < ActiveRecord::Migration
  def change
    create_table :instruments do |t|

    	t.references :instrument_type, null: false
    	t.boolean :electric
    	t.string :name
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
