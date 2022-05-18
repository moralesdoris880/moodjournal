class CreatePages < ActiveRecord::Migration[7.0]
  def change
    create_table :pages do |t|
      t.integer :user_id
      t.integer :mood
      t.text :body
      t.timestamps
    end
  end
end
