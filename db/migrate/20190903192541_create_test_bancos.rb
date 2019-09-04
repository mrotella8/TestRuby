class CreateTestBancos < ActiveRecord::Migration[6.0]
  def change
    create_table :test_bancos do |t|
      t.string :nome
      t.string :link

      t.timestamps
    end
  end
end
