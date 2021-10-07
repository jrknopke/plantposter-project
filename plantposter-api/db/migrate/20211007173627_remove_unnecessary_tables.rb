class RemoveUnnecessaryTables < ActiveRecord::Migration[6.1]
  def change
    drop_table :gardens
    drop_table :gardeners
    drop_table :gardens_plants
  end
end
