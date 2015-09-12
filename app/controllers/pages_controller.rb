class PagesController < ApplicationController
  def home
        if current_user
            redirect_to current_user
        else
             #or whatever
        end
  end
end
