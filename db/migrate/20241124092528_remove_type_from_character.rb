class RemoveTypeFromCharacter < ActiveRecord::Migration[7.1]
  def change
    remove_column :characters, :type, :string
  end
end
