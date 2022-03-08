class Todo < ApplicationRecord
  broadcasts_to ->(todo){ "todos" }, inserts_by: :prepend, target: "todos"
end
