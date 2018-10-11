import React from 'react';
import { List, Avatar, Spin, Icon} from 'antd';
import {Link} from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
import { showDeleteConfirm } from './DistModals';


export const ListaDist = ({handleInfiniteOnLoad, loading,hasMore, lista}) => {  
/* 
    if(this.state.data===undefined)return<Spin size="large" /> */
    
    return (
      <div className="lista-proveedores">
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={handleInfiniteOnLoad}
          hasMore={!loading && hasMore}
          useWindow={false}
        >
          <List
            dataSource={lista}
            renderItem={item => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<Link to={`/admin/dist/${item._id}`}>
               <span>{item.razonSocial}</span> </Link>}
                  description={item.contactName}
                />
                <div>
                  <span> {item.active?'inactivo':'activo'} </span>   
                  <Icon className='iconDist' type="edit" /> <span> | </span>
                  <Icon onClick={showDeleteConfirm} type="delete" />
                </div>
              </List.Item>
            )}
          >
            {loading && hasMore && (
              <div className="lista-proveedores-loading">
                <Spin />
              </div>
            )}
          </List>
        </InfiniteScroll>
      </div>
    );
}