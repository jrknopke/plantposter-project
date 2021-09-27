class AddFamilyToPlants < ActiveRecord::Migration[6.1]
  def change
    add_column :plants, :family, :string
  end
end
