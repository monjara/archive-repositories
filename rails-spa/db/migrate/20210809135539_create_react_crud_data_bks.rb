class CreateReactCrudDataBks < ActiveRecord::Migration[5.2]
  def change
    create_table :react_crud_data_bks do |t|
      t.string :name
      t.text :comment

      t.timestamps
    end
  end
end
