import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { modalAction } from "../../actions/searchAction";
import { AiOutlineClose } from 'react-icons/ai';

// import classNames from 'classnames';
import "./modal.css";

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const close = useSelector((state) => state.movieSeriesReducer);

  return (
    <React.Fragment>

      <div>
        {close.modal && (
          <div>
            <div className="modal">
            </div>
            <div className="contentModal">
              <div className="barModal">
                <AiOutlineClose className="iconClose" onClick={(e) => {
                  dispatch(modalAction(false))
                  e.stopPropagation()
                }
                } />
              </div>
              {children}
            </div>
          </div>
        )}
      </div >
    </React.Fragment>
  )
}
export default Modal;