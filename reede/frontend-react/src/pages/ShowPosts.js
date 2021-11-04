import {useState, useContext, useEffect} from "react"
import {Context} from "../store"
import {updatePosts} from "../store/actions"
import {SaveOutlined,DeleteOutlined, EditOutlined} from '@ant-design/icons'
import {Table, Input, InputNumber, Button, Form, Typography} from 'antd'

const postData = []
let i = 0

function ShowPosts(){

const [state, dispatch] = useContext(Context)
const [isLoading, setIsLoading] = useState(true)

    function itemEditHandler(JSONObject,ID,{setData}){
       
        const itemSubmitted={
            id: ID,
            title: JSONObject.title,
            text: JSONObject.text,
            firstName: JSONObject.firstName,
            lastName: JSONObject.lastName,
            createdAt: JSONObject.createdAt,
            __v: 0,
        }
        console.log(itemSubmitted)
 
        fetch('http://localhost:8081/api/post/update/' + ID.toString(), {
            method: 'PUT',
            body: JSON.stringify(itemSubmitted),
            headers: {
                'Content-Type':'application/json'
            }
        })

    }
    
    function itemDeleteHandler(JSONObject,ID,{setData}){
      
  
        fetch('http://localhost:8081/api/post/delete/' + ID.toString(), {
            
            method: 'DELETE'
        
        })

        window.location.reload()
    }
  
    useEffect(() =>{

        fetch('http://localhost:8081/api/post/').then(res => {

            return res.json()

        }).then( data => {

            const stuff = []

            for (i; i < data.length; i++) {

                postData.push({
                  key: data[i]._id,
                  title: data[i].title,
                  text: data[i].text,
                  firstName: data[i].firstName,
                  lastName: data[i].lastName,
                  createdAt: data[i].createdAt,
                })

                stuff.push({
                    key: data[i]._id,
                    title: data[i].title,
                    text: data[i].text,
                    firstName: data[i].firstName,
                    lastName: data[i].lastName,
                    createdAt: data[i].createdAt,
                })
            }
            
            dispatch(updatePosts(data))
            setIsLoading(false)
        
        })
    
    },[isLoading])


    if(isLoading === true){
        return(
        <div>
            Loading...
        </div>);
    }
    
    const EditableCell = ({

        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        children,
        ...restProps

    }) => {

    const inputNode = inputType === 'number' ? <InputNumber/> : <Input/>

        return (

            <td {...restProps}>
            {editing ? (
                <Form.Item name={dataIndex} style={{margin: 0,}} 
                rules={[{required: true,
                message: `Please Input ${title}!`,},]}>
                {inputNode}
                </Form.Item>
            ) : (children)}
            </td>
        )
    }
    
    const EditPosts = () => {

        const [form] = Form.useForm()
        const [dataforTable, setData] = useState(postData)
        const [editingKey, setEditingKey] = useState('')
        
        const Edited = (record) => record.key === editingKey
        
            const edit = (record) => {

            form.setFieldsValue({
            title: '',
            text: '',
            firstName: '',
            lastName: '',
            createdAt: '',
            ...record,
            })
            setEditingKey(record.key)

            }
        
            const cancel = () => {
                setEditingKey('')

            }
        
            const save = async (key) => {

            try {

                const row = await form.validateFields()
                const newData = [...dataforTable]
                const index = newData.findIndex((item) => key === item.key)
        
                if (index > - 1) {

                    const item = newData[index]
                    newData.splice(index, 1, { ...item, ...row })
                    setData(newData)
                    setEditingKey('')
                    itemEditHandler(row, key, {setData})

                } else {

                    newData.push(row)
                    setData(newData)
                    setEditingKey('')
                    itemEditHandler(row, key)

                }

            } catch (err) {

                console.log('Validation Failed:', err)

            }

            }
        const deleteline = (record) => {

            deletekey(record.key)
        }

        const deletekey = async (key) => {

            try {

            const row = await form.validateFields()
            itemDeleteHandler(row, key, {setData})
        
            } catch (err) {

            console.log('Validation Failed:', err)
            }
        }
        
            const columns = [

            {
            title: 'Title',
            dataIndex: 'title',
            width: '15%',
            editable: true,
            },
            {
            title: 'Text',
            dataIndex: 'text',
            width: '20%',
            editable: true,
            },
            {
            title: 'Firstname',
            dataIndex: 'firstName',
            width: '10%',
            editable: true,
            },
            {
            title: 'Lastname',
            dataIndex: 'lastName',
            width: '10%',
            editable: true,
            },
            {
            title: 'Date',
            dataIndex: 'createdAt',
            width: '15%',
            editable: false,
            },

        ]

        if (state.auth.token) {
            
            columns.push({
                title: 'Action',
                width: '10%',
                dataIndex: 'Action',
    
                render: (_,record) => {

                    const editable = Edited(record)

                    return editable ? (
                        <Button style={{backgroundColor: '#6CFF81'}}>
                        <a href="javascript:;" onClick={() => save(record.key)}><SaveOutlined/>Save</a></Button>
                    ) : ( 
                        <div>   
                        <Button style={{backgroundColor: '#93D1E4'}}><Typography.Link disabled={editingKey !== ''} 
                        onClick={() => edit(record)}><EditOutlined/>Edit</Typography.Link></Button>
    
                        <Button style={{backgroundColor: '#FF736C'}}><Typography.Link disabled={editingKey !== ''} 
                        onClick={() => deleteline(record)}><DeleteOutlined/>Delete</Typography.Link></Button>
                        </div>
                    )
                },
            })
        }

        const mergedColumns = columns.map((col) => {
            if (!col.editable) {
            return col
            }
        
            return {

                ...col,
                onCell: (record) => ({
                    record,
                    inputType: col.dataIndex === 'age' ? 'number' : 'text',
                    dataIndex: col.dataIndex,
                    title: col.title,
                    editing: Edited(record),
                }),
            }
        })

        return (

            <Form form={form} component={false}>

                <Table components={{
                    body: {cell: EditableCell,},}}
                    bordered
                    dataSource={dataforTable}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{
                    onChange: cancel,
                }}/>
            </Form>
        )
        
    }
    
    return(
        <div>
            <br />
            <br />
            <h1>Posts:</h1>
            <EditPosts/>
        </div>
    )
}

export default ShowPosts