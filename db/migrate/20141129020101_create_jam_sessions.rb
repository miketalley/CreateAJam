class CreateJamSessions < ActiveRecord::Migration
  def change
    create_table :jam_sessions do |t|
    	t.integer :host_user_id, null: false
    	t.date :start_date, null: false
    	t.time :start_time, null: false
    	t.date :end_date
    	t.time :end_time
    	t.string :city, null: false
    	t.string :state, null: false
    	t.integer :zip, null: false
    	t.string :description
    	# t.array :attendees

      t.timestamps null: false
    end
  end
end
