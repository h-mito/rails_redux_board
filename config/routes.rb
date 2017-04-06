Rails.application.routes.draw do
  get 'board/index'
  post 'board/insertComment'
  get 'board/readComments/:board_id' => 'board#readComments'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
