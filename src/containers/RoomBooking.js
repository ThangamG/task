import React, { Component } from 'react';
import children from './children.jpg';
import adult from './adult.png';
import room from './room.png';
import plus from './plus.png';
import subtract from './subtract.png';
import './RoomBooking.css';


class RoomBooking extends Component {
    state = {
        "room" : 1,
        "adult" : 1,
        "children" : 0,
      }

    roomAddHandler = event => {
        let availableRooms = this.state.room;
        let availableAdults = this.state.adult;

        if(availableRooms >= availableAdults)
            availableAdults++;
        
       this.setState({
           "room" : availableRooms + 1,
           "adult" : availableAdults
       })
    }

    adultAddHandler = event => {
        let availableRooms = this.state.room;
        let availableAdults = this.state.adult;
        let availableChildren = this.state.children;

        availableAdults++;

        let totalheadcount = availableAdults + availableChildren;
        let possibleheadcount = availableRooms * 5;

        if(totalheadcount > possibleheadcount)
             availableRooms++;
        
       this.setState({
           "room" : availableRooms,
           "adult" : availableAdults
       })
    }

    childrenAddHandler = event => {
        let availableRooms = this.state.room;
        let availableAdults = this.state.adult;
        let availableChildren = this.state.children;

        availableChildren++;

       
        let totalheadcount = availableAdults + availableChildren;
        let possibleheadcount = availableRooms * 5;

        if(totalheadcount > possibleheadcount){
            availableRooms++;
            if( availableRooms > availableAdults){
                availableAdults++;
            }
        }
            
        
       this.setState({
           "room" : availableRooms,
           "adult" : availableAdults,
           "children" : availableChildren
       })
    }
    
    
    roomReduceHandler = event => {
        let availableRooms = this.state.room;
        let availableAdults = this.state.adult;
        let availableChildren = this.state.children;
        availableRooms--;
        if(availableRooms >= availableAdults)
            availableAdults--;
           
        let totalheadcount = availableAdults + availableChildren;
        let possibleheadcount = availableRooms * 5;
        let needToReduce = 0;
        if(totalheadcount > possibleheadcount){
            needToReduce = totalheadcount-possibleheadcount;
            if(availableChildren > needToReduce)
                 availableChildren = availableChildren - needToReduce;
            else{
                availableChildren = availableChildren - needToReduce;
                if(availableRooms < availableAdults)
                     availableAdults =  availableAdults + availableChildren;
                availableChildren = 0;
            }
                
        }
            
        
       this.setState({
            "room" : availableRooms,
            "adult" : availableAdults,
            "children" : availableChildren
       })
    }

    adultReduceHandler = event => {
        let availableRooms = this.state.room;
        let availableAdults = this.state.adult;
        let availableChildren = this.state.children;

        availableAdults--;

        if(availableRooms > availableAdults)
            availableRooms--;

        let totalheadcount = availableAdults + availableChildren;
        let possibleheadcount = availableRooms * 5;

        if (totalheadcount > possibleheadcount){
            let overhead = totalheadcount -possibleheadcount;
            availableChildren = availableChildren - overhead;
        }
            

        
       this.setState({
            "room" : availableRooms,
            "adult" : availableAdults,
            "children" : availableChildren
       })
    }

    childrenReduceHandler = event => {
        let availableRooms = this.state.room;
        let availableAdults = this.state.adult;
        let availableChildren = this.state.children;

        availableChildren--;

        // let totalheadcount = availableAdults + availableChildren;
        // let possibleheadcount = availableRooms * 5;

        // if(availableRooms > availableAdults)
        //      availableRooms--;
        // if(totalheadcount+5 < possibleheadcount)
        //     availableRooms--;
       
       this.setState({
           "room" : availableRooms,
           "children" : availableChildren,
           "adult" : availableAdults
       })
    }
    
    
  render() {
    let room_style = null;
    let adult_style = null;
    let children_style = null;
    if(this.state.room >= 2){
        room_style =  <img src={subtract} alt="subtract" className="subtract"  onClick={this.roomReduceHandler} />
    }
    if(this.state.adult >= 2){
        adult_style =  <img src={subtract} alt="subtract" className="subtract"  onClick={this.adultReduceHandler}/>
    }
    if(this.state.children > 0){
        children_style = <img src={subtract} alt="subtract" className="subtract"  onClick={this.childrenReduceHandler}/>
    }
    return (
        <div className="RoomBooking">
            <table  align="center"  border="1"  rules="rows" frame="box" className="table_property">
                <tbody>
                <tr>
                    <td><img src={room} alt="room" className="room"/></td>
                    <td className="long_column">Room</td>
                    <td>{room_style}</td>
                    <td>{this.state.room}</td>
                    <td><img src={plus} alt="plus" className="plus" onClick={this.roomAddHandler}/></td>
                 </tr>

                <tr>
                    <td><img src={adult} alt="adult" className="adult"/></td>
                    <td className="long_column">Adult</td>
                    <td>{adult_style}</td>
                    <td>{this.state.adult}</td>
                    <td><img src={plus} alt="plus" className="plus" onClick={this.adultAddHandler}/></td>
                </tr>

                <tr>
                    <td><img src={children} alt="children" className="children"/></td>
                    <td className="long_column">Children</td>
                    <td>{children_style}</td>
                    <td>{this.state.children}</td>
                    <td><img src={plus} alt="plus" className="plus" onClick={this.childrenAddHandler}/></td>
                </tr>
                </tbody>
            </table>
      </div>
    );
  }
}

export default RoomBooking;
