class AddJobToCharacter < ActiveRecord::Migration[7.1]
  def change
    add_column :characters, :job, :string
  end
end
