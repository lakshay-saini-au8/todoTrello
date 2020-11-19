import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import _ from "lodash";
import { v4 } from "uuid";
import { connect } from "react-redux";
import { addItemTodo, updateSate } from "../../redux/actions/todoActions";

const Home = ({ restate, addItemTodo }) => {
  const [text, setText] = useState("");
  const handleDragEnd = ({ destination, source }) => {
    if (!destination) {
      return;
    }
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }
    const itemCopy = { ...restate[source.droppableId].item[source.index] };

    restate[source.droppableId].item.splice(source.index, 1);
    restate[destination.droppableId].item.splice(
      destination.index,
      0,
      itemCopy
    );
    updateSate(restate);
  };
  const addItem = () => {
    addItemTodo({ id: v4(), name: text });
    setText("");
  };
  return (
    <div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </div>
      <div className="home">
        <DragDropContext onDragEnd={handleDragEnd}>
          {_.map(restate, (data, key) => {
            return (
              <div className={"column"} key={key}>
                <h3>{data.title}</h3>
                <Droppable droppableId={key}>
                  {(provided) => {
                    return (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={"droppable-col"}
                      >
                        {data.item.map((el, index) => {
                          return (
                            <Draggable
                              key={el.id}
                              index={index}
                              draggableId={el.id}
                            >
                              {(provided) => {
                                return (
                                  <div
                                    className={"item"}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    {el.name}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  restate: state.todoState,
});

export default connect(mapStateToProps, { addItemTodo, updateSate })(Home);