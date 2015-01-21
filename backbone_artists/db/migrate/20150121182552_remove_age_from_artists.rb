class RemoveAgeFromArtists < ActiveRecord::Migration
  def self.up
    remove_column :age, :age_id
  end
end
