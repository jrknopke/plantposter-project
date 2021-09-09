class CreateGardensPlants < ActiveRecord::Migration[6.1]
  def change
    create_table :gardens_plants do |t|
      t.belongs_to :garden
      t.belongs_to :plant

      t.timestamps
    end
  end
end
